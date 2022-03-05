export class Profile {
    firstName: string;
    headshot: Headshot;
    id: string;
    jobTitle: string;
    lastName: string;
    slug: string;
    socialLinks: SocialLinks[];
    type: string;
}

class Headshot {
    alt: string;
    height: number;
    id: string;
    mimeType: string;
    type: string;
    url: string;
    width: number;
}

class SocialLinks {
    callToAction: string;
    type: string;
    url: string;
}