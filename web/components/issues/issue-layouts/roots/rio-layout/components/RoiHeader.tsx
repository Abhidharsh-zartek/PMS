import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import Router from 'next/router'
import React, { useState, useRef, useEffect } from "react";
import { Plus, ChevronDown } from 'lucide-react'
// components
import { SidebarHamburgerToggle } from "components/core/sidebar/sidebar-menu-hamburger-toggle";
// ui
import { Breadcrumbs } from "@plane/ui";
import { CurrencyIcon, StockIcon } from "components/common/appIcons";

const roiValues = [
    {
        label: 'Running',
        value: 'running'
    },
    {
        label: 'Estimated',
        value: 'estimated'
    }
]
export const RoiHeader: React.FC = observer(({ page, setOpen }: { page: 'running' | 'estimated', setOpen: () => void }) => {
    // router
    const router = useRouter();
    const { workspaceSlug, projectId, viewId } = router.query as {
        workspaceSlug: string;
        projectId: string;
        viewId: string;
    };
    // store hooks
    const [openDropdown, setOpenDropdown] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }

    }, [])





    return (

        <div className="relative z-10 sm:h-[3.75rem] flex flex-wrap items-center justify-between gap-x-2 gap-y-4 border-b border-custom-border-200 bg-custom-sidebar-background-100 py-4 pl-4 pr-8">
            <div className="flex items-center gap-2">
                <SidebarHamburgerToggle />
                <Breadcrumbs>

                    <Breadcrumbs.BreadcrumbItem
                        type="component"
                        component={
                            <div className='shrink-0 mr-1 flex flex-row items-start gap-1 text-custom-text-800'>
                                <StockIcon style={{ height: '14px' }} className="mb-1" />
                                <span className='ml-1 text-sm'> ROI - </span>


                                <div ref={dropdownRef} className='absolute transform translate-x-16 flex flex-col w-40'>
                                    <span onClick={() => setOpenDropdown(openDropdown => !openDropdown)} className="text-sm cursor-pointer flex flex-row items-center gap-1">
                                        {roiValues?.find(val => val.value === page)?.label}
                                        <ChevronDown className="h-4" />
                                    </span>
                                    <div className={'z-50 absolute top-5 left-0 w-full bg-custom-sidebar-background-100 rounded-md shadow-lg overflow-hidden ' + (openDropdown ? 'max-h-40 border' : 'max-h-0')}>
                                        {roiValues.filter(val => val.value !== page).map((val, index) => {
                                            return <div key={index} onClick={() => Router.push(`/${workspaceSlug}/roi/${val.value}`)} className='p-2 text-sm cursor-pointer hover:bg-[#204095] hover:text-white'>{val.label}</div>
                                        })}
                                    </div>

                                </div>

                            </div>
                        }
                    />

                </Breadcrumbs>
            </div>
            <div className="flex items-center gap-2">
                <button className='text-xs text-white bg-[#204095] hover:opacity-80 flex flex-row items-center gap-2 px-2.5 py-1.5'>
                    Salary
                    <CurrencyIcon className="h-4 mb-0.5" />
                </button>
                <button onClick={() => setOpen()} className='text-xs text-white bg-[#204095] hover:opacity-80 flex flex-row items-center pl-2.5 pr-1 py-1.5'>
                    Insert
                    <Plus className="h-4 text-white" />
                </button>
            </div>
        </div>
    );
});
