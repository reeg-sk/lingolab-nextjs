import { getCertificates } from "@/lib/records";
import { Metadata } from "next";

export const revalidate = 60

export const metadata: Metadata = {
  title: "Certifikáty – LingoLab",
  description: "",
};
export default async function Certificates() {
  const certificates = await getCertificates();

  return (
    <>
        {JSON.stringify(certificates)}
    </>
  );
}
