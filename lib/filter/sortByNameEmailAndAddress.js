const sortByNameEmailAndAddress = ({
  users = []
}) => users.sort((a, b) => {
  const compareName = a.name.localeCompare(b.name)
  const compareEmail = a.email.localeCompare(b.email)
  const compareCompany = a.company.name.localeCompare(b.company.name)

  return compareName || compareEmail || compareCompany
})

module.exports = {
  sortByNameEmailAndAddress
}
