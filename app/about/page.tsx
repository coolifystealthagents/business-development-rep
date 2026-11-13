import type {Metadata} from 'next';
import {AboutExperience} from '../experience';
export const metadata:Metadata={title:"About",description:"Turn scattered market signals into a focused next conversation. Dedicated business development support for the research, account context, and follow-through behind your growth.",alternates:{canonical:"/about"}};
export default function Page(){return <AboutExperience/>}
