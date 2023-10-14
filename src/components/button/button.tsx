import Image from "next/image";
import Link from "next/link";


const Button = ({ text, iconUrl }: { text: string, iconUrl:string }): JSX.Element => {
    return (<Link href="/auth/login" className="bg-blue-600 hover:bg-blue-700 text-white w-60 font-semibold py-3.5 px-4 rounded-md flex justify-center m-1" >
        <Image className="mr-2" src={iconUrl} alt={text} width={20} height={20} />
        {text}
    </Link>);
}

export default Button;

