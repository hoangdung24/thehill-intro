
  const renderTabPanel = useMemo(() => {
    if (!partnerTabs.items) {
      return;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMULA PAGE = (OFFSET / LIMIT) + 1
    if (isSmUp) {
      return partnerTabs.items.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            {array.map((el, i) => {
              return <CardBrand data={el} />;
            })}
          </TabPanel>
        );
      });
    } else {
      const offset = (currentPage - 1) * POST_LIMIT;
      const data = array.slice(offset, offset + POST_LIMIT);
      console.log("datadatadatadatadatav", data);

      return partnerTabs.items.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            <Grid
              container
              spacing={10}
              sx={{
                marginBottom: "3.5rem",
                paddingBottom: "3.5rem",
                height: "100%",
              }}
            >
              {data.map((el, i) => {
                return (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={3}
                    className="sadsadsadsadasdsadsadasd"
                  >
                    <CardBrand data={el} />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
        );
      });
    }

    //
  }, [array, currentTab, currentPage]);
