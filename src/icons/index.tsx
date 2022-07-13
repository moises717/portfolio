import { SVGProps } from "react"


export function Home(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M.5 9.5l9-9 9 9" transform="translate(1 1)" />
                <path
                    d="M2.5 7.5v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    transform="translate(1 1)"
                />
            </g>
        </svg>
    )
}

export function Lightning(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11.5 9.5h4l-6 9v-6.997l-4-.003 6-9z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function Folder(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M.5 1.5v9a2 2 0 002 2h10a2 2 0 002-2V4.497a1.999 1.999 0 00-1.85-1.994l-.15-.005-5 .002-2-2h-4a1 1 0 00-1 1zM.5 2.5h7"
                    transform="translate(3 4)"
                />
            </g>
        </svg>
    )
}

export function Contact(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(3 3)"
            >
                <circle cx={7.5} cy={5.5} r={2} />
                <path d="M.5 3.5h1v-1a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1h-1M.5 7.5h1M.5 5.5h1M.5 9.5h1" />
                <path d="M10.5 10.5v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2v1a1 1 0 001 1h4a1 1 0 001-1z" />
            </g>
        </svg>
    )
}