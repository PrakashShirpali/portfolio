
type PageHeaderProps = {
  first: string
  second: string
  third: string
}

const PageHeader = ({ first, second, third }: PageHeaderProps) => {
  return (
    <div className="py-20 relative left-[50vw] -translate-x-1/2 flex items-center justify-center">
      <div className="text-6xl font-black uppercase flex gap-x-2 max-sm:text-4xl">
        <span className="text-pforeground">{first}</span>
        <span className="text-mtheme">{second}</span>
      </div>
      <span className="text-9xl font-black uppercase text-backtext absolute top-1/2 -translate-y-1/2 max-sm:text-7xl">{third}</span>
    </div>
  )
}

export default PageHeader;
