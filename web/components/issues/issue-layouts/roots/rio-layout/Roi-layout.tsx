import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProjectExpenses from "./components/ProjectExpenses";
import { InsertEditPopup } from "./components/InsertEditPopup";

export default function RoiLayout({ open, onClose, page, workspaceSlug, projectId }: { open: boolean, onClose: () => void, page: 'running' | 'estimated', workspaceSlug: string, projectId?: string }) {
    const router = useRouter();
    const [editPopup, setEditPopup] = useState(false)

    return (
        <div className='w-full h-full flex flex-col sm:flex-row'>
            <InsertEditPopup preData={editPopup} isOpen={open || editPopup ? true : false} onClose={() => { onClose(); setEditPopup(false) }} />

            <div className='w-full sm:w-[300px] max-h-44 h-full sm:max-h-full overflow-auto sm:min-h-full flex flex-col p-4 border-b sm:border-r border-custom-border-200'>
                <span className='mb-1 text-sm font-medium text-custom-sidebar-text-200'>Projects</span>
                {
                    [
                        {
                            label: 'Dashiee',
                            href: '/dashiee',
                            highlight: (pathname: string) => pathname.includes(`/dashiee`),

                        },
                        {
                            label: 'I wish',
                            href: '/i-wish',
                            highlight: (pathname: string) => pathname.includes(`/i-wish`),

                        },
                    ].map((link, index) => {
                        return <Link key={index} href={`/${workspaceSlug}/roi/${page}${link.href}`} >
                            <span className="my-px block w-full">

                                <div
                                    className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium outline-none ${link.highlight(router.asPath)
                                        ? " bg-custom-primary-100/10 text-custom-primary-100"
                                        : " text-custom-sidebar-text-200 hover:bg-custom-sidebar-background-80 focus:bg-custom-sidebar-background-80"
                                        }`}
                                >

                                    {link.label}

                                </div>
                            </span>
                        </Link>
                    })
                }
            </div>
            {projectId && <ProjectExpenses setEditPopup={(val) => setEditPopup(val)} {...{ page, workspaceSlug, projectId }} />}

        </div>
    );
}