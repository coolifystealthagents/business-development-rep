import type {Metadata} from 'next';
import {LibraryExperience} from '../experience';
export const metadata:Metadata={title:"Blog",description:"Turn scattered market signals into a focused next conversation. Dedicated business development support for the research, account context, and follow-through behind your growth.",alternates:{canonical:"/blog"}};
export default function Page(){return <LibraryExperience kind="blog"/>}
