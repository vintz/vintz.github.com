const init_scroll = () => 
{
    let header
    const elements = document.getElementsByClassName('bar-header')
    if (elements && elements.length > 0)
    {
        header = elements[0]
    }

    document.body.onscroll = (ev) => 
    {
        if (header)
        {
            if (window.scrollY < 80)
            {
                console.log('OVER')
                header.classList.add('bar-moved')
            }
            else 
            {
                console.log('UNDER')

                header.classList.remove('bar-moved')
            }
        }
    }
    
}

