interface SpeakerCardsProps {
    name: string;
    role: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: string | any;
    shape?: "circle" | "rect";
    nation: string;
}

export type { SpeakerCardsProps }