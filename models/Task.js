class Task {
    constructor(id, name, category, urgency, startDate, endDate, location, desc) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.urgency = urgency;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.decription = desc;

        if (!(this.startDate instanceof Date))
            this.startDate = Date(startDate);
        if (!(this.endDate instanceof Date))
            this.endDate = Date(endDate);
    }
}
