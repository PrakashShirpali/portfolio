import { useTheme } from "@/components/theme-provider"

export default function ThemeColorToggle() {
  const { accentTheme, setAccentTheme } = useTheme()

  return (
    <div className="grid grid-cols-2 gap-1 relative max-md:fixed max-md:left-0 max-md:ml-3">

      <button
        onClick={() => setAccentTheme("yellow")}
        className={`cursor-pointer size-7 rounded-full bg-yellow-400 border-2 ${accentTheme === "yellow"
          ? "border-pbackground"
          : "border-transparent"
          }`}
      />

      <button
        onClick={() => setAccentTheme("blue")}
        className={`cursor-pointer size-7 rounded-full bg-blue-500 border-2 ${accentTheme === "blue"
          ? "border-pbackground"
          : "border-transparent"
          }`}
      />

      <button
        onClick={() => setAccentTheme("green")}
        className={`cursor-pointer size-7 rounded-full bg-green-500 border-2 ${accentTheme === "green"
          ? "border-pbackground"
          : "border-transparent"
          }`}
      />

      <button
        onClick={() => setAccentTheme("red")}
        className={`cursor-pointer size-7 rounded-full bg-red-500 border-2 ${accentTheme === "red"
          ? "border-pbackground"
          : "border-transparent"
          }`}
      />

    </div>
  )
}