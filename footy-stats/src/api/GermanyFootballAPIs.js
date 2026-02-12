import api from './axios';


export async function fetchTopScorersBundesliga() {
  try {
    const response = await api.get('/players/topscorers?league=78&season=2024');
    return response.data;
  } catch (error) {
    console.error('Error fetching top scorers:', error);
    throw error;
  }
}

export async function fetchTopScorersBundesliga2() {
  try {
    const response = await api.get('/players/topscorers?league=79&season=2024');
    return response.data;
  } catch (error) {
    console.error('Error fetching top scorers:', error);
    throw error;
  }
}

export async function fetchTopScorers3Liga() {
  try {
    const response = await api.get('/players/topscorers?league=80&season=2024');
    return response.data;
  } catch (error) {
    console.error('Error fetching top scorers:', error);
    throw error;
  }
}
