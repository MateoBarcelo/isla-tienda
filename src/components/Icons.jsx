export function AddToCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l6 .429m7.138 6.573l-.143 1h-13' />
        <path d='M15 6h6m-3 -3v6' />
      </svg>
    )
  }
  
  export function RemoveFromCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l8 .571m5.43 4.43l-.429 3h-13' />
        <path d='M17 3l4 4' />
        <path d='M21 3l-4 4' />
      </svg>
    )
  }
  
  export function ClearCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17a2 2 0 1 0 2 2' />
        <path d='M17 17h-11v-11' />
        <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
        <path d='M3 3l18 18' />
      </svg>
    )
  }

export function UserIcon() {
  return(
    <svg width="30" height="20" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 31.25V28C28 26.2761 27.3152 24.6228 26.0962 23.4038C24.8772 22.1848 23.2239 21.5 21.5 21.5H8.5C6.77609 21.5 5.12279 22.1848 3.90381 23.4038C2.68482 24.6228 2 26.2761 2 28V31.25" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.0001 15C18.59 15 21.5001 12.0899 21.5001 8.5C21.5001 4.91015 18.59 2 15.0001 2C11.4103 2 8.50012 4.91015 8.50012 8.5C8.50012 12.0899 11.4103 15 15.0001 15Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export function CartIcon({color="#1F443D"}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 39 33"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M14.4 29.9a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zM26.8 29.9a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zM2 2h5.425l1.05 4.65 2.606 11.536a3.097 3.097 0 003.023 2.414h13.31a3.1 3.1 0 003.025-2.428L33 6.65M33 6.65H8.975"
        ></path>
      </svg>
    );
  }

  export function EditIcon() {
    return(
      <svg width="20" height="20" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0833 135.5H61.7699C62.8776 135.506 63.9757 135.294 65.0011 134.875C66.0266 134.456 66.9593 133.839 67.7457 133.059L125.989 74.7317L149.892 51.3334C150.681 50.5509 151.307 49.62 151.735 48.5944C152.162 47.5687 152.382 46.4686 152.382 45.3575C152.382 44.2464 152.162 43.1463 151.735 42.1207C151.307 41.095 150.681 40.1641 149.892 39.3817L114.206 3.27418C113.423 2.4853 112.492 1.85915 111.467 1.43185C110.441 1.00454 109.341 0.784546 108.23 0.784546C107.119 0.784546 106.019 1.00454 104.993 1.43185C103.967 1.85915 103.037 2.4853 102.254 3.27418L78.5191 27.0933L20.1074 85.4209C19.3273 86.2073 18.7102 87.14 18.2913 88.1655C17.8725 89.1909 17.6602 90.289 17.6666 91.3967V127.083C17.6666 129.316 18.5533 131.456 20.1318 133.035C21.7102 134.613 23.851 135.5 26.0833 135.5ZM108.23 21.1175L132.049 44.9367L120.097 56.8883L96.2782 33.0692L108.23 21.1175ZM34.4999 94.8475L84.4107 44.9367L108.23 68.7558L58.3191 118.667H34.4999V94.8475ZM160.75 152.333H9.24992C7.01768 152.333 4.87687 153.22 3.29844 154.799C1.72 156.377 0.833252 158.518 0.833252 160.75C0.833252 162.982 1.72 165.123 3.29844 166.702C4.87687 168.28 7.01768 169.167 9.24992 169.167H160.75C162.982 169.167 165.123 168.28 166.701 166.702C168.28 165.123 169.167 162.982 169.167 160.75C169.167 158.518 168.28 156.377 166.701 154.799C165.123 153.22 162.982 152.333 160.75 152.333Z" fill="#1F443D"/>
      </svg>

    )
  }