import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Style from "../styles/pages/Home.module.css";

import Head from "next/head";

export default function Home() {
  return (
    <div className={Style.container}>
      <Head>
        <title>Início - WakeWork</title>
      </Head>
      
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>


        </div>
      </section>
    </div>
  )
}
