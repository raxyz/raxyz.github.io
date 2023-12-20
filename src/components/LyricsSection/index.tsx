import { LyricRow, Lyrics } from "../../services/fetchSongs";
import './index.css'

interface LyricsSectionProps {
    lyrics: Lyrics;
    onLyricClick: (position: number) => void;
}

export const LyricsSection = (props: LyricsSectionProps) => {
    if (!props.lyrics) {
        return <p>There're no lyrics 🙁</p>
    }

    const clickOnRow = (row: LyricRow) => {
        props.onLyricClick(row.position);
    }

    const rowItems = props.lyrics.rows.map((r, i) => {
        return r.text
            ? <span key={i++} onClick={() => clickOnRow(r)} className="lyrics-hover">{r.text}</span>
            : <span key={i++}><br /></span>;
    });

    return rowItems;
}