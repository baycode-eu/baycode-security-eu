import * as React from "react"

const RecurseChild = (props) => {
  const { title, children, link } = props.child

  return <li style={{zIndex: 100}}>
    {link ? <a href={link}>
      {title}
    </a> : title}
    {children && <ul>
      {children.map((item, key) => <RecurseChild
        key={key}
        child={item}
      />)}
    </ul>}
  </li>
}

export default ({ stack }) => {
  return <div className="stack">
    <h2 className="heading">
      Stack
    </h2>
    <div className="tools">
      {stack?.map((item, key) => (
        <div key={key} className={item.className}>
          <h3>{item.title}</h3>
          <ul>
            {item.children && item.children.map(({
               title,
               children,
               link
             }, keySub) => <RecurseChild
              key={keySub}
              child={{
                title,
                children,
                link
              }}
            />)}
          </ul>
        </div>
      ))}
    </div>
  </div>
}