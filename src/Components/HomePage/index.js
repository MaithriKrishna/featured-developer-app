import React, { useEffect } from 'react';
import { Header } from "../Header";
import { DeveloperCardsView } from "../DevelopersCard";

export const HomePageView = ({ developersData = [], fetchDevelopersData, deleteDevelopersData }) => {

  useEffect(() => {
    fetchDevelopersData()
  }, []);

  // useEffect(() => {});

  return developersData.length ?
    <>
      <Header />
      <DeveloperCardsView developersData={developersData} deleteDevelopersData={deleteDevelopersData} />
    </>
    : null;
}
