type TaskType = {
    id: string;
    name?: string;
    description?: string;
    priority?: string;
    status?: string;
    createdAt?: string; // or Date if you convert it on front-end
    updatedAt?: string; // or Date if you convert it on front-end
}

type UserType = {
    id: string;
    name?: string;
    email?: string;
    image?: string;
    hasAccess?: string;
}