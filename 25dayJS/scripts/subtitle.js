export default function changeSubtitle(subtitle, number) {
  const oldSubtitleText = subtitle.textContent;
  const newSubtitleText = oldSubtitleText.replace("***", `${number}`)
  subtitle.textContent = newSubtitleText;
  return subtitle;
}