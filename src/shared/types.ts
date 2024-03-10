

export enum SelectedPage {
    Home = "home",
    Benefits = "benefit",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType {
    icon: JSX.Element,
    title: string,
    description: string,
}

export interface ClassType {
    image: string,
    title: string,
    text?: string,
}