export interface StaffCardProps {
    imageSrc: string;
    fullName: {
        lastName: string;
        firstName: string;
        middleName: string;
    }
    jobTitle: string;
    appeal: string;
    achievement: string;
}