import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Hello world!</h1>
    <h1><Link href='/users'>Users</Link></h1>
    </>
  );
}
