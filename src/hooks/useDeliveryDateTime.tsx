import { useState, useMemo } from "react";
import dayjs from "dayjs";

export const useDeliveryDateTime = () => {
    const currentTime = dayjs();
    const isPast4PM = currentTime.hour() >= 16; // 4:00 PM (16:00) cut-off
    const timeToStartExpressDelivery = 10;

    const today = dayjs().format("YYYY-MM-DD");
    const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
    const currentHour = currentTime.hour();

    const [selectedDate, setSelectedDate] = useState(isPast4PM ? tomorrow : today);
    const [selectedTime, setSelectedTime] = useState<string>("8:00 AM - 6:00 PM");

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

        let filteredSlots = timeSlots.filter((slot) => currentHour < slot.end);

        if (currentHour >= timeToStartExpressDelivery && selectedDate !== today) {
            filteredSlots = filteredSlots.filter((slot) => slot.range.toLowerCase() !== "express"); // Remove "Express" slot
        }

        return filteredSlots;
    }, [currentHour, selectedDate, today, timeToStartExpressDelivery]);

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
        isPast4PM,
        today
    };
};
