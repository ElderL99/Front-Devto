// src/components/AuthorCard.jsx
'use client'

import useAvatarUrl from '@/hooks/useAvatarUrl'
import { BadgePlus } from 'lucide-react'

export default function AuthorCard({ author }) {

    const avatarUrl = useAvatarUrl(author.username, 80)

    return (
        <div className="bg-white  rounded-lg shadow overflow-hidden text-sm">

            <div className="h-12 bg-red-100 relative">

                <img
                    src={avatarUrl}
                    alt={author.username}
                    className="absolute -bottom-6 left-4 w-12 h-12 rounded-full border-4 border-white"
                />
            </div>


            <div className="pt-8 px-4 pb-6 space-y-4">

                <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-lg font-semibold">{author.username}</h3>
                    {author.isPro && <BadgePlus className="w-4 h-4 text-blue-600" />}
                </div>


                <button className="w-[300px]  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Follow
                </button>

                {author.bio && (
                    <p className="text-gray-700">
                        {author.bio}
                    </p>
                )}



                <p className="text-gray-700">
                    Hey! I&apos;m Bekah. I&apos;m a career-changer. Bootcamp grad. Dev. Writer.
                    Keynote Speaker. Mom to 4 kids. Creator, Maintainer, Podcast co-host: VirtualCoffee.io |
                    Developer Experience Lead, @OpenSauced
                </p>


                <div className="space-y-3 text-gray-500">
                    <div>
                        <span className="font-semibold uppercase">Location</span><br />
                        Ohio
                    </div>
                    <div>
                        <span className="font-semibold uppercase">Education</span><br />
                        Moglestu Business School and Barbu IB School of Economics
                    </div>
                    <div>
                        <span className="font-semibold uppercase">Work</span><br />
                        Private investor & volunteer DEV mod
                    </div>
                    <div>
                        <span className="font-semibold uppercase">Joined</span><br />
                        Oct 27, 2023
                    </div>
                </div>
            </div>
        </div>
    )
}
