import AboutMe from '@/Data/AboutMe.json'
type MetaTagInput = {
    title: string;
    description: string;
    url: string;
    image: string;

}

export default function MetaTag({ title, description, url, image }: MetaTagInput) {
    return <>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta name="keywords" content="ZocketZero, Nawasan, Nawasan Wisitsingkhon, portfolio, ณวสันต์, ณวสันต์ วิศิษฏ์ศิงขร, เว็บไซต์แนะนำตัว"></meta>

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
    </>
}

export function DefaultMetaTag(props: { title?: string }) {
    return <MetaTag
        title={props.title ?? 'ZocketZero (Nawasan Wisitsingkhon)'}
        // description="เว็บไซต์สำหรับการแนะนำตัว ช่องทางการติดต่อ และเก็บผลงานการเขียนเว็บไซต์ต่างๆ"
        description={AboutMe.detail}
        image="https://nawasan.dev/example-page.png"
        url="https://nawasan.dev"
    />

}
