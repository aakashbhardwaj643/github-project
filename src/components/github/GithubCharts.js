import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Pie, Bar } from 'react-chartjs-2';

const ChartsSection = styled.section`
  max-height: 100%;
  background: #04124E;
  padding: 25px 0;
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  transform: translateY(-100px);

  @media screen and (max-width: 500px) {
    transform: translateY(0);
  } 
`;

const ChartHeading = styled.h1`
  font-weight: 400;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const LanguageChart = styled.div`
  background: #F0F3F4;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 25%);
`;

const StarsChart = styled.div`
  background: #F0F3F4;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 25%);
`;

const SizeChart = styled.div`
  background: #F0F3F4;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 25%);
`;

const GithubCharts = (props) => {
  const langLabels = [];
  const langVals = [];
  const langColors = [];
  const repoStarLabels = [];
  const repoSizeLabels = [];
  const starVals = [];
  const sizeVals = [];
  
  const mostStarredRepos = [];
  const maxSizeRepos = [];

  // Repos
  if(props.stats[0]) {
    props.stats[0].forEach(repo => {
      mostStarredRepos.push(repo);
      maxSizeRepos.push(repo);
    });
    mostStarredRepos.sort((a, b) => b.watchers - a.watchers);
    maxSizeRepos.sort((a, b) => b.size - a.size); 

    mostStarredRepos.slice(0, 5).forEach(repo => {
      starVals.push(repo.watchers);
      repoStarLabels.push(repo.name);
    });

    maxSizeRepos.slice(0, 5).forEach(repo => {
      sizeVals.push(repo.size);
      repoSizeLabels.push(repo.name);
    });
  } 

  // Languages 
  if(props.stats[1]) {
    props.stats[1].forEach(language => {
      langLabels.push(language.label);
      langVals.push(language.value);
      langColors.push(language.color);
    });
  };

  if(!props.errors[0]) {
    return (
      <ChartsSection>
        <Charts>
          <StarsChart>
            <ChartHeading>Most Starred Repositories</ChartHeading>
            <Bar
              data={{
                labels: repoStarLabels,
                datasets: [{
                    label: 'Most Starred Repositories',
                    data: starVals,
                    backgroundColor: [
                      '#f1e05a',
                      '#563d7c',
                      '#3572a5',
                      '#199f4b',
                      '#e34c26'
                    ],
                    borderColor: [
                      '#f1e05a',
                      '#563d7c',
                      '#3572a5',
                      '#199f4b',
                      '#e34c26'
                    ],
                    borderWidth: 1
                  }
                ]
              }}
              width={400}
              height={400}
            />
          </StarsChart>
  
          <LanguageChart>
            <ChartHeading>Languages Used</ChartHeading>
            <Pie
              data={{
                labels: langLabels,
                datasets: [{
                  label: 'Languages Used',
                  data: langVals,
                  backgroundColor: langColors,
                  borderColor: langColors
                }]
              }}
              width={400}
              height={400}
            />
          </LanguageChart>
  
          <SizeChart>
            <ChartHeading>Largest Repositories</ChartHeading>
            <Bar
              data={{
                labels: repoSizeLabels,
                datasets: [{
                    label: 'Repositories Ordered By Size',
                    data: sizeVals,
                    backgroundColor: [
                      '#f1e05a',
                      '#563d7c',
                      '#3572a5',
                      '#199f4b',
                      '#e34c26'
                    ],
                    borderColor: [
                      '#f1e05a',
                      '#563d7c',
                      '#3572a5',
                      '#199f4b',
                      '#e34c26'
                    ],
                    borderWidth: 1
                  }
                ]
              }}
              width={400}
              height={400}
            />
          </SizeChart>
        </Charts>
      </ChartsSection>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = (state) => {
  return { stats: state.stats, errors: state.errors };
};

export default connect(mapStateToProps)(GithubCharts); 