// import Moon from '../../images/svg/moon-fill.svg'
import Check from '../../images/svg/check-double-line.svg'
import ThumbDown from '../../images/svg//thumb-down-fill.svg'

function InvoiceDefaultStatus({ status }) {
  return (
    <div className='d-flex mt-2'>
      {/* <Moon className='spin fill-grey' /> */}
      <object data="./../images/svg/moon-fill.svg" type="image/svg+xml">
      </object>

      {/* <svg srcset="../../images/svg/check-double-line.svg" /> */}
      <div className='ml-3 text-muted' style={{ fontWeight: '600' }}>{status}</div>
    </div>
  )
}

function InvoiceConfirmedStatus({ status }) {
  return (
    <div className='d-flex mt-2'>
      <Check className='fill-success' />
      <div className='ml-3 text-success' style={{ fontWeight: '600' }}>{status}</div>
    </div>
  )
}

function InvoiceFailedStatus({ status }) {
  return (
    <div className='d-flex mt-2'>
      <ThumbDown className='fill-danger' />
      <div className='ml-3 text-danger' style={{ fontWeight: '600' }}>{status}</div>
    </div>
  )
}

export default function InvoiceStatus({ variant, status }) {
  switch (variant) {
    case 'confirmed':
      return <InvoiceConfirmedStatus status={status} />
    case 'failed':
      return <InvoiceFailedStatus status={status} />
    default:
      return <InvoiceDefaultStatus status={status} />
  }
}
