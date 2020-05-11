import { createBrowserHistory, createMemoryHistory } from 'history';

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

let historyEntity;

export function setHistory(newHistory) {
  if (newHistory) {
    historyEntity = newHistory;
  }
}

export default function getHistory() {
  if (!historyEntity) {
    historyEntity = process.env.BROWSER
      ? createBrowserHistory()
      : createMemoryHistory();
  }

  return historyEntity;
}
