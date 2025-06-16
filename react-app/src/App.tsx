    import React, { useEffect, useRef } from "react";

    const App = () => {
      const ref = useRef<HTMLInputElement>(null);

      useEffect(() => {
        //side effect
        if (ref.current) ref.current.focus();
      } )

      useEffect(()=> {
        document.title = "My New app"
      })

      return (
        <div>
          <input ref={ref} type="text" className="form-control" />
        </div>
      );
    };

    export default App;
