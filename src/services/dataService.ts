import { AboutData } from "../model/AboutData";
import { ResumeEntry } from "../model/ResumeEntry";
import { SkillData } from "../model/SkillData";


/**
 * Fetches and parses an 'about' data JSON file
 */
export const fetchAboutData = async (
    jsonFilePath: string
): Promise<AboutData> => {
    const res = await fetch(jsonFilePath);
    if (!res.ok) throw new Error(`Failed to fetch ${jsonFilePath}`);
    const data = await res.json();
    return data as AboutData;
};

/**
 * Fetches and parses a resume JSON file
 */
export const fetchResumeEntries = async (
    jsonFilePath: string
): Promise<ResumeEntry[]> => {
    const res = await fetch(jsonFilePath);
    if (!res.ok) throw new Error(`Failed to fetch ${jsonFilePath}`);
    const data = await res.json();
    return data as ResumeEntry[];
};

/**
 * Fetches and parses a categorized skills JSON file
 */
export const fetchSkills = async (
    jsonFilePath: string
): Promise<SkillData> => {
    const res = await fetch(jsonFilePath);
    if (!res.ok) throw new Error(`Failed to fetch ${jsonFilePath}`);
    const data = await res.json();
    return data as SkillData;
};
