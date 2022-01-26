const FIREBASE_DOMAIN = 'https://bike-route-16956-default-rtdb.europe-west1.firebasedatabase.app';

export async function getAllRoutes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/bikeroutes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch bikeroutes.');
  }

  const transformedBikeroutes = [];

  for (const key in data) {
    const bikerouteObj = {
      id: key,
      ...data[key],
    };

    transformedBikeroutes.push(bikerouteObj);
  }

  return transformedBikeroutes;
}

export async function getSingleBikeroute(bikerouteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/bikeroutes/${bikerouteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch bikeroute.');
  }

  const loadedBikeroute = {
    id: bikerouteId,
    // location: bikerouteCity,
    // distance: bikerouteDistance,
    ...data,
  };

  return loadedBikeroute;
}

export async function addRoute(bikerouteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/bikeroutes.json`, {
    method: 'POST',
    body: JSON.stringify(bikerouteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create bikeroute.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.bikerouteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(bikerouteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${bikerouteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}