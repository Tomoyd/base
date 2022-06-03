function getPaintInfo() {
  if (performance) {
    const paints = performance.getEntriesByType('paint');
    return {
      fp: paints.find((paint) => paint.name === 'first-paint')?.startTime,
      fcp: paints.find((paint) => paint.name === 'first-contentful-paint')
        ?.startTime,
    };
  }
}

function getLPaintInfo() {
  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log(entry.startTime);
    }
  });
  observer.observe({ type: 'largest-contentful-paint', buffered: true });
}

function getLInputInfo() {
  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      entry.processingStart - entry.startTime;
    }
  });
  observer.observe({ type: 'first-input-delay', buffered: true });
}
