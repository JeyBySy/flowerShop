export interface SubCategoryType {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
};

export interface CategoryType {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    SubCategories: SubCategoryType[];
};

export interface CategoryTypeProps {
    success: boolean,
    message: string
    data: CategoryType[],
}