/* Mobile Metrics */
const metricslink = document.querySelector("#metrics");
const metricstab = document.querySelector("#metrics-tab");
const overlay = document.querySelector("#overlay");
const arrow = document.querySelector("#arrow");


if (metricslink) {
    metricslink.addEventListener('click', () => {
        metricstab.classList.toggle('metrics-show'); /* toggles class */
        overlay.classList.toggle('overlay-show'); /* toggles class */
    });
}

const hideMetrics = () => {
    metricstab.classList.remove('metrics-show'); /* toggles class */
    overlay.classList.remove('overlay-show'); /* toggles class */
};

overlay.addEventListener('click', hideMetrics);
arrow.addEventListener('click', hideMetrics);
metricstab.addEventListener('click', hideMetrics);
