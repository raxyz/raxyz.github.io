import { ExternalUrl } from "../../model/songs";
import { Icon } from "../Icon";

interface SongExternalLinksProps {
    externalUrls: ExternalUrl[];
}

export const SongExternalLinks = (props: SongExternalLinksProps) => {
    if (!props.externalUrls) {
        return (<></>);
    }

    const linksItem = props.externalUrls.map(i => {
        return (
            <a target="_blank" href={i.url} title={i.source} key={i.url} className="me-2">
                <Icon iconName={i.icon as any} size={24} color={i.color} />
            </a>
        )
    });

    return (
        <span>{linksItem}</span>
    )
}
