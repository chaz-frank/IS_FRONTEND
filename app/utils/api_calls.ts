let ORIGIN: string;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5001";
}
else {
    ORIGIN = "https://api.infinitseed.com"
}

export const SKILL_GET = () => `${ORIGIN}/api/skill/`;
export const SKILL_POST = () => `${ORIGIN}/api/skill/`;