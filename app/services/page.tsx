import type {Metadata} from 'next';
import {ServicesExperience} from '../experience';
export const metadata:Metadata={title:"Services",description:"Turn scattered market signals into a focused next conversation. Dedicated business development support for the research, account context, and follow-through behind your growth.",alternates:{canonical:"/services"}};
export default function Page(){return <ServicesExperience/>}
