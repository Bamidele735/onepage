import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useAccount } from "wagmi";
import useImageUrl from "../../utils/sanityImage";
import { Logo } from "../../types/sanityData";
import { fetchLogoData } from "../../lib/logoAPI";

export default function NavBar() {
  const [logoData, setLogoData] = useState<Logo | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const logo = await fetchLogoData();
      setLogoData(logo[0]);
    };

    fetchLogo();
  }, []);

  // console.log("address", address);
  return (
    <header
    >
 
    </header>
  );
}
