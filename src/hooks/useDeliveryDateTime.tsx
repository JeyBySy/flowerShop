import { useState, useMemo } from "react";
import dayjs from "dayjs";
// const mockCurrentTime = dayjs("2025-04-08T17:00:00");  //

export const useDeliveryDateTime = () => {
    // const currentTime = mockCurrentTime
    const currentTime = dayjs();
    const isPast6PM = currentTime.hour() >= 18; // 4:00 PM (16:00) cut-off
    const timeToStartExpressDelivery = 10;

    const today = dayjs().format("YYYY-MM-DD");
    const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
    const currentHour = currentTime.hour();

    const [selectedDate, setSelectedDate] = useState(isPast6PM ? tomorrow : today);

    // Filter available time slots dynamically
    const availableSlots = useMemo(() => {
        const timeSlots = [
            { label: "Express Delivery", range: "Express", end: 24 },
            { label: "Anytime", range: "8:00 AM - 6:00 PM", end: 14 },
            { label: "Morning", range: "7:00 AM - 10:00 AM", end: 8 },
            { label: "Noon", range: "10:00 AM - 1:00 PM", end: 11 },
            { label: "Afternoon", range: "1:00 PM - 4:00 PM", end: 15 },
            { label: "Evening", range: "4:00 PM - 8:00 PM", end: 18 },
            { label: "Midnight", range: "8:00 PM - 11:00 PM", end: 21 },
        ];

        let filteredSlots = [];


        // If the selected date is today and it's past 4 PM, allow all slots for tomorrow
        if (selectedDate === today && isPast6PM) {
            filteredSlots = timeSlots; // Allow all slots for tomorrow
        }
        // If the selected date is tomorrow, allow all slots
        else if (dayjs(selectedDate).isAfter(today)) {
            filteredSlots = timeSlots.filter((slot) => slot.label.toLowerCase() !== "express delivery"); // Exclude express delivery for tomorrow
        }

        else {
            filteredSlots = timeSlots.filter((slot) => currentHour < slot.end);
            // If current time is after the cutoff for express delivery, remove the express slot
            if (currentHour >= timeToStartExpressDelivery) {
                // filteredSlots = filteredSlots.filter((slot) => slot.range.toLowerCase() !== "express");
                // eslint-disable-next-line no-self-assign
                filteredSlots = filteredSlots;
            }
        }
        return filteredSlots;
    }, [currentHour, selectedDate, today, isPast6PM, timeToStartExpressDelivery]);

    const [selectedTime, setSelectedTime] = useState<string>(availableSlots.length > 0 ? availableSlots[0].range : "");

    const handleDateSelection = (daysOffset: number) => {
        const newDate = dayjs().add(daysOffset, "day").format("YYYY-MM-DD");
        setSelectedDate(newDate);
    };

    return {
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        availableSlots,
        handleDateSelection,
        isPast6PM,
        today
    };
};
