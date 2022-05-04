import React, { useState } from 'react';
import { FaveButton, FeaturedArticle } from '../../components';

const Headlines = () => {
  const [articles, setStories] = useState([
    {
      id: 2503,
      headline: 'Disaster Strikes',
      snippet: 'It was a dark and stormy night...',
    },
    {
      id: 1322,
      headline: 'Sunny Days Ahead',
      snippet: 'Even in the UK, beach days are still upon us.',
    },
    {
      id: 5541,
      headline: 'Beware the Frumious Bandersnatch',
      snippet:
        'Twas brillig, and the slithy toves did gyre and gimble in the wabe.',
    },
  ]);

  const [chosenArticle, setChosenArticle] = useState();

  const handleArticleSelect = (articleId) => {
    const chosenArticle = articles.find((art) => art.id === articleId);
    setChosenArticle(chosenArticle);
  };

  const renderStories = () =>
    articles.map((art) => (
      <li key={art.id} onClick={() => handleArticleSelect(art.id)}>
        <FaveButton />{' '}
        <strong role="heading" aria-label="headline">
          {art.headline}
        </strong>{' '}
        {art.snippet}
      </li>
    ));

  return (
    <>
      <ul> {renderStories()} </ul>
      <FeaturedArticle chosenArticle={chosenArticle} />
    </>
  );
};

export default Headlines;
