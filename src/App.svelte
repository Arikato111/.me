<script>
  import { Link } from "svelte-routing";
  import "./App.css";
  import ButtonContact from "./components/ButtonContact.svelte";
  import ThreeWord from "./components/ThreeWord.svelte";

  import GithubIcon from "./components/icons/GithubIcon.svelte";
  import CertificateIcon from "./components/icons/CertificateIcon.svelte";
  import LinkedinIcon from "./components/icons/LinkedinIcon.svelte";
  import YoutubeIcon from "./components/icons/YoutubeIcon.svelte";
  import OnlyFansIcon from "./components/icons/OnlyFansIcon.svelte";

  let url = "https://www.youtube.com/watch?v=4MHfWtH9MTM&t=25s";
</script>

<svelte:head>
  <title>Arikato111</title>
</svelte:head>

<main class="main-flex">
  <div
    class="text-3xl sm:text-6xl text-slate-800 dark:text-slate-200 font-medium"
  >
    Hello!, I'm <span class="text-purple-700 use-font font-bold changename"
      ><span>Arikato111</span></span
    ><span
      class="inline-block hover:rotate-45 duration-300 ease-in-out transition"
      >👋</span
    >
  </div>
  <ThreeWord />
  <div class="flex flex-wrap items-center justify-center">
    <a href="https://github.com/Arikato111">
      <ButtonContact title="Github" Icon={GithubIcon} />
    </a>
    <Link to="/certificates">
      <ButtonContact title="Certificates" Icon={CertificateIcon} />
    </Link>
    <a href="https://www.linkedin.com/in/nawasan-wisitsingkhon-183680239/">
      <ButtonContact title="Linkedin" Icon={LinkedinIcon} />
    </a>
    <a href="https://youtube.com/@Arikato111">
      <ButtonContact Icon={YoutubeIcon} title="Youtube" />
    </a>
    <a
      href="https://onlyfans.com/Arikato111"
      on:auxclick={(e) => {
        e.preventDefault();
        window.open(url);
      }}
      on:contextmenu={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
      on:click={(e) => {
        e.preventDefault();
        window.location.href = url;
      }}
    >
      <ButtonContact Icon={OnlyFansIcon} title="OnlyFans" />
    </a>
  </div>
</main>

<style>
  .changename:hover span {
    display: none;
  }
  .changename:hover::before {
    content: "Nawasan ";
  }
</style>
