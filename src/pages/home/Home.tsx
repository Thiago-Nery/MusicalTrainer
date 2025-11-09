import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import "./Home.css"

const { Paragraph, Title } = Typography;   

export default function Home() {
    const emojis = ["🎵", "🎶", "🎸", "🎹", "🥁", "🎷", "🎺", "🎻"];
    const [emojiIndex, setEmojiIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setEmojiIndex((prev) => (prev + 1) % emojis.length);
    }, 1500);
    return () => clearInterval(interval);
    }, [emojis.length]);

    return (
        <div id="homepageContainer">
            <Title id="homepageTitle"> {emojis[emojiIndex]} Bem-vindo ao Musical Trainer!</Title>
            <div id="homepageDescription">
                <Paragraph className="homepageParagraph">
                    → Pratique teoria musical de forma simples e gratuita. 
                </Paragraph>
                <Paragraph className="homepageParagraph">
                    → Teste seus conhecimentos e acompanhe seu progresso musical com questionários interativos.
                </Paragraph>
                <Paragraph className="homepageParagraph" id="subjectInvite">
                    Acesse o menu lateral e escolha um assunto!
                </Paragraph>
            </div>
        </div>
    )
}