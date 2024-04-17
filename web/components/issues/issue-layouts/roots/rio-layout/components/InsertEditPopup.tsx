import { FC, Fragment, useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const InsertEditPopup: FC<Props> = observer((props) => {
    const { isOpen, onClose, preData } = props;

    const handleClose = () => {
        onClose();
        setData(
            {
                project: '',
                startDate: '',
                dueDate: '',
                marketingCost: '',
                uiuxCost: '',
                salesCost: '',
                adminCost: '',
                projectManager: '',
                developerCost: '',
                developerCostQA: '',
                developerCostBA: '',
                toolCost: '',
                travelAndMiscCost: '',
                costDueToRisk: '',
                totalRevanue: ''
            }
        )
    };

    const [confirmpopup, setConfirmPopup] = useState(false)
    const [data, setData] = useState(preData ?? {
        project: '',
        startDate: '',
        dueDate: '',
        marketingCost: '',
        uiuxCost: '',
        salesCost: '',
        adminCost: '',
        projectManager: '',
        developerCost: '',
        developerCostQA: '',
        developerCostBA: '',
        toolCost: '',
        travelAndMiscCost: '',
        costDueToRisk: '',
        totalRevanue: ''
    })

    useEffect(() => {
        if (isOpen && preData) {
            setData(preData)
        }
    }, [isOpen])

    if (confirmpopup) return <ConfirmPopup isOpen={confirmpopup} onClose={() => setConfirmPopup(false)} onConfirm={() => { handleClose(); setConfirmPopup(false) }} message='Are you sure you want to discard the changes?' />
    else
        return (
            <Transition.Root show={isOpen ?? false} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={confirmpopup ? () => { } : handleClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-custom-backdrop transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-20 overflow-y-auto">
                        <div className="my-10 flex items-center justify-center p-4 text-center sm:p-0 md:my-20">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform rounded-lg bg-custom-background-100 px-5 py-8 text-left shadow-custom-shadow-md transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                                    <span className='text-xl font-semibold'>Insert</span>
                                    <div className='mt-3 px-2 py-1 w-full border border-custom-border-200 rounded grid grid-cols-4'>
                                        <span>Project Name</span>

                                        <div className='col-span-3 flex flex-row items-center gap-3'>
                                            :
                                            <select className='ml-3' >
                                                <option selected hidden >Project Name</option>
                                                <option value='project-1' >Project 1</option>
                                                <option value='project-2' >Project 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    {
                                        [
                                            {
                                                label: 'Start Date',
                                                value: data.startDate,
                                                onChange: (val) => setData({ ...data, startDate: val }),
                                                type: 'date'
                                            },
                                            {
                                                label: 'Due Date',
                                                value: data.dueDate,
                                                onChange: (val) => setData({ ...data, dueDate: val }),
                                                type: 'date'
                                            },
                                            {
                                                label: 'Marketing Cost',
                                                value: data.marketingCost,
                                                onChange: (val) => setData({ ...data, marketingCost: val }),
                                                type: 'amount'
                                            },
                                            {
                                                label: 'UI/UX Cost',
                                                value: data.uiuxCost,
                                                onChange: (val) => setData({ ...data, uiuxCost: val }),
                                                type: 'dropdown',
                                                options: [
                                                    { label: 'designer 1', value: 'uiux-1' },
                                                    { label: 'designer 2', value: 'uiux-2' },
                                                ],
                                                placeholder: 'Select Designer'
                                            },
                                            {
                                                label: 'Sales Cost',
                                                value: data.salesCost,
                                                onChange: (val) => setData({ ...data, salesCost: val }),
                                                type: 'amount'
                                            },
                                            {
                                                label: 'Admin Cost',
                                                value: data.adminCost,
                                                onChange: (val) => setData({ ...data, adminCost: val }),
                                                type: 'amount'
                                            },
                                            {
                                                label: 'Project Manager',
                                                value: data.projectManager,
                                                onChange: (val) => setData({ ...data, projectManager: val }),
                                                type: 'dropdown',
                                                options: [
                                                    { label: 'manager 1', value: 'manager-1' },
                                                    { label: 'manager 2', value: 'manager-2' },
                                                ],
                                                placeholder: 'Select Manager'
                                            },
                                        ].map((input, index) => {

                                            return <div key={index} className='mt-1 text-base px-2 py-1 w-full bg-[#EBF1FF] rounded grid grid-cols-4'>
                                                <span className='flex flex-row items-center' >{input.label}</span>

                                                <div className='col-span-3 flex flex-row items-center gap-5'>
                                                    :<InputField {...input} type={input.type as 'date' | 'amount' | 'dropdown'} />

                                                </div>
                                            </div>
                                        })
                                    }
                                    <div className='mt-1 text-base px-2 py-1 w-full bg-[#EBF1FF] rounded grid grid-cols-4'>
                                        <span className='flex flex-row items-center' >Developer Cost</span>

                                        <div className='col-span-3 flex flex-row items-center gap-3'>

                                            :
                                            <div className='ml-3 flex flex-row items-center'>
                                                <span className='italic mr-2'> &#8377;30000.00</span>
                                                +
                                                <div className='flex flex-row items-center mx-2'>
                                                    QA:
                                                    <InputField value={data.developerCostQA} onChange={val => setData({ ...data, developerCostQA: val })} type='amount' />
                                                </div>
                                                +
                                                <div className='flex flex-row items-center ml-2'>
                                                    BA:
                                                    <InputField value={data.developerCostBA} onChange={val => setData({ ...data, developerCostBA: val })} type='amount' />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {
                                        [
                                            {
                                                label: 'Tool Cost',
                                                value: data.toolCost,
                                                onChange: (val) => setData({ ...data, toolCost: val }),
                                                type: 'amount'
                                            },
                                            {
                                                label: 'Travel & Miscellaneous',
                                                value: data.travelAndMiscCost,
                                                onChange: (val) => setData({ ...data, travelAndMiscCost: val }),
                                                type: 'amount'
                                            },
                                            {
                                                label: 'Cost due to Risk',
                                                value: data.costDueToRisk,
                                                onChange: (val) => setData({ ...data, costDueToRisk: val }),
                                                type: 'amount'
                                            },
                                        ].map((input, index) => {

                                            return <div key={index} className='mt-1 text-base px-2 py-1 w-full bg-[#EBF1FF] rounded grid grid-cols-4'>
                                                <span className='flex flex-row items-center' >{input.label}</span>

                                                <div className='col-span-3 flex flex-row items-center gap-5'>
                                                    :<InputField {...input} type={input.type as 'date' | 'amount' | 'dropdown'} />

                                                </div>
                                            </div>
                                        })
                                    }
                                    <div className='mt-3 px-2 py-1 w-full border border-custom-border-200 rounded grid grid-cols-4'>
                                        <span>Total Revenue Of Project</span>

                                        <div className='text-base col-span-3 flex flex-row items-center gap-3'>
                                            :
                                            <InputField value={data.totalRevanue} onChange={(e) =>
                                                setData({ ...data, totalRevanue: e })} type='amount' className='ml-2 bg-[#EBF1FF]' />
                                        </div>
                                    </div>
                                    <div className='mt-3 w-full flex flex-row items-center justify-end gap-3'>
                                        <button onClick={() => setConfirmPopup(true)} className='text-sm text-white bg-[#204095] hover:opacity-80 flex flex-row items-center gap-2 px-3.5 py-1.5'>
                                            Discard
                                        </button>
                                        <button onClick={() => handleClose()} className='text-sm text-white bg-[#204095] hover:opacity-80 flex flex-row items-center gap-2 px-3.5 py-1.5'>
                                            Submit
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        );
});
const ConfirmPopup = ({ isOpen, onClose, onConfirm, message }: { isOpen: boolean, onClose: () => void, onConfirm: () => void, message: string }) => {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto" onClose={onClose}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            {message}
                                        </Dialog.Title>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#204095] text-base font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#204095] sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => onConfirm()}
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                                    onClick={() => onClose()}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>

    );
}

const InputField = ({ value, onChange, type, options, placeholder, className }: { value: string, onChange: (val: string) => void, type: 'date' | 'amount' | 'dropdown', options?: { label: string, value: string }[], placeholder?: string, className?: string }) => {
    const [showInput, setShowInput] = useState(false);
    const ref = useRef(null);

    const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target))
            setShowInput(false);

    }
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

    }, [ref])

    if (showInput) return (
        <div ref={ref} className='ml-2'>
            {
                type === 'date' ? <input type='date' className={'px-1 py-px rounded ' + className} value={value} onChange={(e) => onChange(e.target.value)} />
                    :
                    type === 'amount' ? <div className='flex flex-row gap-1 items-center'>&#8377; <input type='number' className={'px-1 py-0.5 rounded ' + className} value={value} onChange={(e) => onChange(e.target.value)} /></div>
                        : <select className={'px-1 py-0.5 rounded ' + className} value={value} onChange={(e) => onChange(e.target.value)} >
                            {
                                options.map((option, index) => <option key={index} value={option.value} >{option.label}</option>)
                            }
                        </select>
            }
        </div>
    )
    else return (
        <button className='hover:opacity-70 ml-2' onClick={() => setShowInput(true)} >
            {type === 'date' ? <span className='underline' >{value ? value : 'dd-mm-yy'}</span> : type === 'amount' ? <div className='flex flex-row'>
                <span className='underline'>&#8377; {value ? value : 'Enter value'}</span>
            </div> : <select className='bg-transparent -mx-1.5 pointer-events-none' >
                <option selected hidden>{value ? options.find(val => val.value === value)?.label : placeholder}</option>
            </select>}
        </button>
    )
}
