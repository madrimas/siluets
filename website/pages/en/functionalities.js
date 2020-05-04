/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Functionalities(props) {
  const { config: siteConfig } = props;

  const ApplicationInfo = [
    {
      content: 'Podstrona przedstawia logowanie się do aplikacji',
      title: 'Panel logowania',
      image: siteConfig.baseUrl + 'img/screens/image4.png',
      imageAlign: 'bottom'
    },
    {
      content: 'Podstrona logowania dla wersji mobilnej',
      title: 'Wersja mobilna',
      image: siteConfig.baseUrl + 'img/screens/image8.jpg',
      imageAlign: 'bottom'
    },
    {
      content: 'Podstrona służąca do zapisu treningu',
      title: 'Zapis treningu',
      image: siteConfig.baseUrl + 'img/screens/image6.png',
      imageAlign: 'bottom'
    },
    {
      content: 'Podstrona do zapisu treningu w wersji mobilnej',
      title: 'Wersja mobilna',
      image: siteConfig.baseUrl + 'img/screens/image5.jpg',
      imageAlign: 'bottom'
    },
    {
      content: 'Podstrona pozwalająca na zapis zestawu ćwiczeń treningowych',
      title: 'Zestaw ćwiczeń treningowych',
      image: siteConfig.baseUrl + 'img/screens/image3.png',
      imageAlign: 'bottom'
    },
    {
      content: 'Zapis zestawu ćwiczeń w wersji mobilnej',
      title: 'Wersja mobilna',
      image: siteConfig.baseUrl + 'img/screens/image10.jpg',
      imageAlign: 'bottom'
    },
    {
      content: 'Podstrona pozwalająca na zapis wymiarów ciała',
      title: 'Pomiar wymiarów ciała',
      image: siteConfig.baseUrl + 'img/screens/image11.png',
      imageAlign: 'bottom'
    },
    {
      content: 'Podstrona do pomiaru wymiarów ciała w wersji mobilnej',
      title: 'Wersja mobilna',
      image: siteConfig.baseUrl + 'img/screens/image1.jpg',
      imageAlign: 'bottom'
    }
  ];

  const ProgressInfo = [
    {
      content: 'Podstrona do obserwacji rozwoju tężyzny',
      title: 'Wykresy tężyzny fizycznej',
      image: siteConfig.baseUrl + 'img/screens/image9.png',
      imageAlign: 'bottom'
    },
    {
      content: 'Wykresy tężyzny fizycznej w wersji mobilnej',
      title: 'Wersja mobilna',
      image: siteConfig.baseUrl + 'img/screens/image2.jpg',
      imageAlign: 'bottom'
    },
    {
      content: 'Wykresy tężyzny fizycznej w wersji mobilnej',
      title: 'Wersja mobilna',
      image: siteConfig.baseUrl + 'img/screens/image7.jpg',
      imageAlign: 'bottom'
    }
  ]


  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Funkcjonalności dostępne na stronie</h1>
          </header>
          <p>Projekt oferuje następujące możliwości:</p>
          <GridBlock align="center" contents={ApplicationInfo} layout="twoColumn" />
          <GridBlock align="center" contents={ProgressInfo} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Functionalities;
