import SponsorListTier from './sponsorListTier'

export default function SponsorList(props) {
  const platinumSponsors = props.sponsors.filter(sponsor => sponsor.logoSize === 'l')
  const goldSponsors = props.sponsors.filter(sponsor => sponsor.logoSize === 'm')
  const silverSponsors = props.sponsors.filter(sponsor => sponsor.logoSize === 's')
  const bronzeSponsors = props.sponsors.filter(sponsor => sponsor.logoSize === 'xs')
  const additionalSupport = props.sponsors.filter(sponsor => sponsor.logoSize === 'additionalSupport')

  return (
    <>
      { platinumSponsors.length > 0 && <SponsorListTier sponsors={platinumSponsors} logoSize="l" title="Platinum Sponsors"/> }
      { goldSponsors.length > 0 && <SponsorListTier sponsors={goldSponsors} logoSize="m" title="Gold Sponsors"/> }
      { silverSponsors.length > 0 && <SponsorListTier sponsors={silverSponsors} logoSize="s" title="Silver Sponsors"/> }
      { bronzeSponsors.length > 0 && <SponsorListTier sponsors={bronzeSponsors} logoSize="xs" title="Bronze Sponsors"/> }
      { additionalSupport.length > 0 && <SponsorListTier sponsors={additionalSupport} logoSize="additionalSupport" title="Additional support from:"/> }
    </>
  )
}