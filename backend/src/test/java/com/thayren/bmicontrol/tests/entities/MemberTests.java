package com.thayren.bmicontrol.tests.entities;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.thayren.bmicontrol.entities.Member;
import com.thayren.bmicontrol.tests.factory.MemberFactory;

public class MemberTests {

	@Test
	public void BMIShouldCalculateWhenPositiveHeightAndPositiveWeight() {

		Double height = 1.82;
		Double weight = 110.0;
		Double expectedValue = 33.20854969206617;

		Member member = MemberFactory.createEmptyMember();

		member.calculateBMI(height, weight);

		Assertions.assertEquals(expectedValue, member.getBmi());
	}
	
	@Test
	public void RankShouldCalculateWhenPositiveBMI() {

		Double bmi = 33.2;
		String expectedValue = "OBESIDADE";

		Member member = MemberFactory.createEmptyMember();

		member.calculateRank(bmi);

		Assertions.assertEquals(expectedValue, member.getRank());
	}


}
