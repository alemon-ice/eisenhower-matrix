export interface ICard {
    id: string;
    address?: string;
    badges: object;
    checkItemStates: string[];
    closed: boolean;
    cordinates?: string;
    cover: object;
    creationMethod?: string;
    dateLastActivity: string;
    desc: string;
    descData: object;
    due?: string;
    dueComplete: boolean;
    dueReminder?: string;
    email: string;
    idBoard: string;
    idChecklists: string[];
    idLabels: string[];
    idList: string;
    idMembers: string[];
    idMembersVoted: string[];
    idShort: number;
    idAttachmentCover: string;
    labels: string[];
    limits: {
        attachments: object;
    };
    locationName?: string;
    manualCoverAttachment: boolean;
    name: string;
    pos: number;
    shortLink: string;
    shortUrl: string;
    subscribed: boolean;
    url: string;
}