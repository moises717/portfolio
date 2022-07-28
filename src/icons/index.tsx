import { SVGProps } from "react"


export function Home(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
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

export function LightningOn(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
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
                    d="M6.5 17.5h4M8.5 4a4.5 4.5 0 012.001 8.532l-.001.968a2 2 0 11-4 0v-.968A4.5 4.5 0 018.5 4zM8.5 1.5v-1M13.5 3.5l1-1M3.5 3.5l-1-1M13.5 12.5l1 1M3.5 12.5l-1 1M1.5 7.5h-1M16.5 7.5h-1"
                    transform="translate(2 1)"
                />
            </g>
        </svg>
    )
}

export function LightningOff(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
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
                    d="M2.5 13.5h4M4.5 0a4.5 4.5 0 012.001 8.532L6.5 9.5a2 2 0 11-4 0v-.968A4.5 4.5 0 014.5 0z"
                    transform="translate(6 5)"
                />
            </g>
        </svg>
    )
}

export function Folder(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
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

export function GitHub(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            x="0px"
            y="0px"
            width={128}
            height={128}
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M7.5 1C3.91 1 1 3.906 1 7.488c0 2.867 1.863 5.301 4.445 6.16.325.059.555-.273.555-.523 0-.152.004-.336 0-.875-1.809.39-2.375-.875-2.375-.875-.297-.75-.656-.965-.656-.965-.59-.402.043-.39.043-.39.652.043.988.605.988.605.5.875 1.629.79 2 .625 0-.398.043-.688.152-.871C4.11 10.019 2.996 8.839 3 7.207c.004-.965.336-1.715.875-2.27-.234-.296-.395-1.312.086-1.937 1.207 0 1.926.871 1.926.871s.566-.246 1.61-.246c1.046 0 1.608.234 1.608.234S9.828 3 11.035 3c.48.625.32 1.64.133 1.918.516.543.832 1.293.832 2.289 0 1.633-1.11 2.813-3.148 3.168.128.195.148.469.148.875v1.875c0 .25.227.586.559.523A6.497 6.497 0 0014 7.488C14 3.906 11.09 1 7.5 1z" />
        </svg>
    )
}


export function Linkedin(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            x="0px"
            y="0px"
            width={128}
            height={128}
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M2.758 1C1.793 1 1 1.793 1 2.758v9.488C1 13.207 1.793 14 2.758 14h9.488c.961 0 1.754-.793 1.754-1.754V2.758C14 1.793 13.207 1 12.246 1zm0 1h9.488c.422 0 .754.332.754.758v9.488a.747.747 0 01-.754.754H2.758A.748.748 0 012 12.246V2.758C2 2.332 2.332 2 2.758 2zM4 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 6v6h2V6zm3 0v6h2V9.32c0-.832.078-1.578 1.078-1.578.985 0 .922.895.922 1.633V12h2V9.04C12 7.32 11.64 6 9.691 6c-.937 0-1.41.375-1.668.875H8V6z" />
        </svg>
    )
}

export function Code(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(2 3)"
            >
                <path d="M10.5 0.5L6.5 14.5" />
                <path
                    transform="rotate(135 4.5 5.5)"
                    d="M7.328 2.672L7.328 8.328 1.672 8.328"
                />
                <path
                    transform="scale(1 -1) rotate(-45 -10.435 0)"
                    d="M15.328 6.672L15.328 12.328 9.672 12.328"
                />
            </g>
        </svg>
    )
}

export function Book(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            {...props}
        >
            <path
                d="M18.5 6.59c-1.333-.726-2.667-1.09-4-1.09s-2.667.364-4 1.09v9.91c1.333-.667 2.667-1 4-1s2.667.333 4 1zm-8 0c-1.333-.726-2.667-1.09-4-1.09s-2.667.364-4 1.09v9.91c1.333-.667 2.667-1 4-1s2.667.333 4 1z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export function User(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            height={21}
            viewBox="0 0 21 21"
            width={21}
            {...props}
        >
            <path
                d="M10.5 2.5a3 3 0 013 3v2a3 3 0 11-6 0v-2a3 3 0 013-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 001 1h12a1 1 0 001-1z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

