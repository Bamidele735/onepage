import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { fetchSocialMediaLinks } from "../../lib/socialMediaLinks";
import { fetchIcons } from "../../lib/icons";
import Link from "next/link";
export default function Footer() {
  const [socialMediaData, setSocialMediaData] = useState<any | null>(null);
  const [icons, setIcons] = useState<any | null>(null);
  // console.log("socialMediaData", icons);
  useEffect(() => {
    const fetchFooterLinks = async () => {
      const media = await fetchSocialMediaLinks();
      setSocialMediaData(media);
    };

    const fetchFooterIcons = async () => {
      const footerIcons = await fetchIcons();
      setIcons(footerIcons[0]);
    };
    fetchFooterLinks();
    fetchFooterIcons();
  }, []);
  return (
    <footer>
     
    </footer>
  );
}
