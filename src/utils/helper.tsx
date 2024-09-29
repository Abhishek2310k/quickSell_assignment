const iconSize = { width: 14, height: 14 }; // Define size once here

export const getPriorityIcon = (priority: string) => {
    let iconPath = "";
    switch (priority) {
        case "No priority":
            iconPath = "/icons_FEtask/No-priority.svg";
            break;
        case "Low":
            iconPath = "/icons_FEtask/Img - Low Priority.svg";
            break;
        case "Medium":
            iconPath = "/icons_FEtask/Img - Medium Priority.svg";
            break;
        case "High":
            iconPath = "/icons_FEtask/Img - High Priority.svg";
            break;
        case "Urgent":
            iconPath = "/icons_FEtask/SVG - Urgent Priority colour.svg";
            break;
        default:
            iconPath = "/icons_FEtask/No-priority.svg";
    }

    return <img src={iconPath} alt={priority} {...iconSize} />;
};

export const getStatusIcon = (status: string) => {
    let iconPath = "";
    switch (status) {
        case "Backlog":
            iconPath = "/icons_FEtask/Backlog.svg";
            break;
        case "Todo":
            iconPath = "/icons_FEtask/To-do.svg";
            break;
        case "In progress":
            iconPath = "/icons_FEtask/in-progress.svg";
            break;
        case "Done":
            iconPath = "/icons_FEtask/Done.svg";
            break;
        case "Canceled":
            iconPath = "/icons_FEtask/Cancelled.svg";
            break;
        default:
            iconPath = "/icons_FEtask/Cancelled.svg";
    }

    return <img src={iconPath} alt={status} {...iconSize} />;
};
