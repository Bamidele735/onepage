import React from "react";
import nodeTableImg from "../../../assects/node_table.png";
import nodeGraphPng from "../../../assects/node_graph.png";
import nodeGamesPng from "../../../assects/node_games.png";
import Image from "next/image";
import styles from "./token.module.css";
export default function Tokenomics() {
  return (
    <div className={styles.Tokenomics}>
      <h1>Node Tokenomics</h1>
      <h2>
        The tokennomics is designed to benefit node holders. The largest pool of
        35% of entire token supplu will be emitted to node holders. Node price
        ranges from $4k to $142k. early node operators may not only get the
        chepest price but alsothe largestyeild for $XSSED emissions.
      </h2>
      <section className={styles.nodeSection}>
        <Image
          src={nodeTableImg}
          className={styles.nodeTableImg}
          width={700}
          height={700}
          alt="node image"
        />
        <Image
          src={nodeGraphPng}
          className={styles.nodeGraphPng}
          width={700}
          height={700}
          alt="node image"
        />
      </section>
      <section>
        <Image
          src={nodeGamesPng}
          className={styles.nodeGamesPng}
          width={700}
          height={700}
          alt="node image"
        />
      </section>
    </div>
  );
}
